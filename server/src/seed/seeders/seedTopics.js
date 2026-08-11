import Topic from "../../models/topic.model.js";

const seedTopics = async (topicsData, createdModules) => {
  const createdTopics = new Map();

  for (const moduleTopics of topicsData) {
    const module = createdModules.get(moduleTopics.module);

    if (!module) {
      continue;
    }

    for (const topicData of moduleTopics.topics) {
      const topic = await Topic.findOneAndUpdate(
        {
          module: module._id,
          slug: topicData.slug,
        },
        {
          ...topicData,
          module: module._id,
        },
        {
          upsert: true,
          returnDocument: "after",
          setDefaultsOnInsert: true,
        },
      );

      createdTopics.set(topic.slug, topic);
    }
  }

  return createdTopics;
};

export default seedTopics;
