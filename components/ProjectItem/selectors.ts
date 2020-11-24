export default ({
  userStore: { accessToken },
  projectsStore: { list },
  projectStore,
}) => ({
  accessToken,
  list,
  project: projectStore,
});
