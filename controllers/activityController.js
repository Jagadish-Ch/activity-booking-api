const Activity = require('../models/Activity');

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find({}, {
      _id: 1,
      title: 1,
      description: 1,
      location: 1,
      datetime: 1
    });

    const formatted = activities.map(activity => ({
      id: activity._id,
      title: activity.title,
      description: activity.description,
      location: activity.location,
      datetime: activity.datetime
    }));

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch activities' });
  }
};
