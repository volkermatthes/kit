module.exports = {
  "src/**/*.{js,jsx,ts,tsx,json}": (filenames) => {
    const tsc = "yarn tsc";
    const joinedFilenames = filenames.join(" ");
    const prettier = `yarn run prettier:fix ${joinedFilenames}`;
    const eslint = `yarn run lint ${joinedFilenames}`;
    return [tsc, prettier, eslint];
  },
};
