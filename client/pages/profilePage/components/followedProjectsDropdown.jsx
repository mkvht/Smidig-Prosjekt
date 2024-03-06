export function FollowedProjectsDropdown({
  followedProjects,
  setDisplayedProject,
}) {
  function handleChange(e) {
    const val = parseInt(e.target.value);
    let project;
    if (val === -1) {
      project = null;
    } else {
      project = followedProjects.filter((project) => {
        return project.project_id === val;
      })[0];
    }

    setDisplayedProject(project);
  }

  if (!followedProjects) {
    return <p>You do not follow any projects </p>;
  }

  //Component listing projects followed in dropdown//
  return (
    <div className="followed-projects-dropdown-list">
      <select
        className={"dropdown"}
        onChange={(e) => {
          handleChange(e);
        }}
      >
        {followedProjects.map((fp) => (
          <option
            className={"followed-projects-dropdown-option"}
            key={fp.project_id}
            value={fp.project_id}
          >
            {fp.project_name}
          </option>
        ))}
      </select>
    </div>
  );
}
