# Micro-Frontend Demos

## First project: a simple demo showcasing a container (host) and two remote files (cart, product)

- Uses Webpack and its [Module Federation Plugin](https://webpack.js.org/concepts/module-federation/) to separate the micro-projects into individual, isolated projects.
- Check it out in the [basic_app](./basic_app) directory.

## Second project: A SaaS Demo app that utilises Frontend Frameworks in conjunction with micro-frontends.

- Inside the [landing_page_demo](./landing_page_demo) directory.

### Production Workflow Setup

1. Each micro-project's team develops on staging/dev branches, separate from main/master.
   - 'Auth' team develops on `auth-dev` branch
2. Once the feature is complete and ready for deployment, push the branch to remote repository.
3. Create the PR for the branch into main/master
4. Review the PR (Discuss with team whether it's best to keep it in own team or bring in the other teams)
   - trial both
5. When ready to deploy, merge the PR
6. CI/CD workflow detects the change in the main branch, and deploys.
