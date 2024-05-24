import { a } from "@aws-amplify/backend";

const schema = a.schema({
  User: a.model({
    userId: a.id(),
    username: a.string(),
    email: a.string(),
  }),

  Community: a.model({
    communityId: a.id(),
    name: a.string(),
    description: a.string(),
    announcements: a.hasMany("Announcement", "communityId"),
  }),

  Announcement: a.model({
    announcementId: a.id(),
    title: a.string(),
    content: a.string(),
    likeCount: a.integer(),
    tags: a.string(),
    community: a.belongsTo("Community", "communityId"),
  }),
});
