# dockertest

### How to create automated image build on commit?

Prerequisites:

- created Azure Container Registry
- Created a GitHub personal access token (https://github.com/settings/tokens/new)



Replace values in [] brackets and run following code to create ACR task:

`ACR_NAME=[Azure-Container-registry-name`]
`GIT_USER=[Git-username`]
`GIT_PAT=[GIT-Personal-access-token]`

`az acr task create \`
    `--registry $ACR_NAME \`
    `--name [task-name] \`
    `--image [image-name]:{{.Run.ID}} \`
    `--context https://github.com/[git-username]/dockertest.git \`
    `--file Dockerfile \`
    `--git-access-token $GIT_PAT`



#### Test ACR Task 

Trigger manually:

`az acr task run --registry $ACR_NAME --name [task-name]`

Display the logs for the currently running task to verify and monitor the build progress:

`az acr task logs --registry $ACR_NAME`

See a list of the task runs that ACR Tasks has completed for your registry:

`az acr task list-runs --registry $ACR_NAME --output table`



Run container manually:

az acr run --registry $ACR_NAME   --cmd '$Registry/[image-name]:[image-version]' /dev/null    

Run the task on schedule https://docs.microsoft.com/en-us/azure/container-registry/container-registry-tasks-scheduled

