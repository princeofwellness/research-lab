import nJwt, {Jwt, KeyResolverCallback} from "njwt";
import RefreshToken from "~/server/db/models/RefreshToken";

export const asyncVerify = (jwtString: string | Buffer): Promise<Jwt> => {
    const signingKeyResolver = (kid: string, cb: KeyResolverCallback): Jwt | undefined | never => {
        RefreshToken.findOne({where: {signingKid: kid}}).then(refreshTok => {
            if(!refreshTok)
                return cb(new Error('Unknown kid'), '');
            cb(null, refreshTok.dataValues.signingKey);
        })
        return undefined;
    }

    return new Promise<Jwt>((resolve, reject) => {
        const verifier = nJwt.createVerifier().withKeyResolver(signingKeyResolver)
        verifier.verify(jwtString, (err: Error | null, verifiedJwt: Jwt) => {
            if (err) {
                reject(err);
            } else {
                resolve(verifiedJwt);
            }
        });
    });
}