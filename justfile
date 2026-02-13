set shell := ["powershell.exe", "-c"]

@default:
    just --list

buildx:
    docker buildx build --tag ghcr.io/dimrich/research-lab --push .

backup-wp:
    docker compose down
    Compress-Archive -Path ./docker/data -DestinationPath ./docker/data.zip
