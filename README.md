This is a [Next.js](https://nextjs.org/) project for the policyMe recruiting task.

# Tooling choices
Even though the task was originally given to us in a react app, I decided to upgrade the project to use more modern tooling to speed up development time and be more efficient. Rather than using reactjs, javascript, and CSS, I chose to use nextjs, typescript and tailwind CSS:
* NextJS: https://nextjs.org/
* typescript: https://www.typescriptlang.org/
* tailwind CSS: https://tailwindcss.com/

The reason why I chose these tools are because they have several benefits over regular reactjs, some of these features include:
1. Server side rendering
1. Functional CSS
1. Typehinting

# Future Optimization
1. I would start caching the attribute modifier
    * Right now, I just calculate it when needed and it isn't too often, so we're fine. However, caching would be beneficial in the long run.