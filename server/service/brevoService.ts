import * as Brevo from '@getbrevo/brevo'

class BrevoServiceImpl {
    private _apiKey: string;

    constructor(apiKey: string) {
        this._apiKey = apiKey;
    }

    /**
     * Sends a transactional email using Brevo's transactional API.
     *
     * @param params
     * @returns Whether the email was sent successfully.
     */
    async sendTransactionalEmail(params: object): Promise<void> {
        const res = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                'api-key': this._apiKey
            },
            body: JSON.stringify(params)
        });
        const parsedRes = await res.json();
        if (res.status != 201) {
            throw new Error(`Code: ${parsedRes.code}, Message: ${parsedRes.message}`);
        }
    }

    /**
     * Adds a contact (by emailAddress) to a list (identified by listId).
     *
     * @param listId - ID of the list to which the email will be subscribed.
     * @param emailAddress - Email address of the new contact.
     * @returns Whether the subscription was successful.
     */
    async subscribe(listId: number, emailAddress: string): Promise<number> {
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                'api-key': this._apiKey
            },
            body: JSON.stringify({email: emailAddress, listIds: [parseInt(`${listId}`)], updateEnabled: false})
        };

        const res = await fetch('https://api.brevo.com/v3/contacts', options);
        const parsedRes = await res.json();
        if (res.status != 201) {
            throw new Error(parsedRes.message);
        }

        return parsedRes.id;
    }
}

export const BrevoService = new BrevoServiceImpl(process.env.BREVO_API_KEY);
export const BrevoServiceExhibizz = new BrevoServiceImpl(process.env.BREVO_EXHIBIZZ_API_KEY);