import { activityData } from "../data/activityData";

export const getRecentActivity = async (username) => {
  const activities = await fetch(`https://api.github.com/users/${username}/events/public`);
  if (activities.status === 200) {
    return activities;
  } else return activityData;
}