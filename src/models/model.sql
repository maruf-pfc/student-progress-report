
Table "batches" {
  "id" SERIAL [pk, increment]
  "name" VARCHAR(50) [not null]
  "start_date" DATE
  "end_date" DATE
}

Table "users" {
  "id" SERIAL [pk, increment]
  "name" VARCHAR(100) [not null]
  "university_name" VARCHAR(150)
  "email" VARCHAR(150) [unique, not null]
  "password_hash" TEXT [not null]
  "batch_id" INT
  "created_at" TIMESTAMP [default: `NOW()`]
}

Table "assignments" {
  "id" SERIAL [pk, increment]
  "user_id" INT
  "class_number" INT [not null]
  "performance_score" INT [default: 0]
  "participation_score" INT [default: 0]
  "submitted_at" TIMESTAMP
}

Table "contests" {
  "id" SERIAL [pk, increment]
  "type" VARCHAR(20) [not null]
  "name" VARCHAR(100) [not null]
  "date" DATE [not null]
}

Table "contest_participation" {
  "id" SERIAL [pk, increment]
  "user_id" INT
  "contest_id" INT
  "performance_score" INT [default: 0]
  "participation_score" INT [default: 0]

  Indexes {
    (user_id, contest_id) [unique]
  }
}

Table "cf_contests" {
  "id" SERIAL [pk, increment]
  "user_id" INT
  "contest_name" VARCHAR(150)
  "contest_date" DATE
  "solved_problems" INT [default: 0]
  "rating_change" INT [default: 0]
  "rank" INT
  "created_at" TIMESTAMP [default: `NOW()`]
}

Table "cf_stats" {
  "user_id" INT [pk]
  "total_solved" INT [default: 0]
  "total_solved_last_month" INT [default: 0]
  "max_streak_last_month" INT [default: 0]
  "contests_participated" INT [default: 0]
  "last_contest" VARCHAR(150)
  "max_rating" INT [default: 0]
  "updated_at" TIMESTAMP [default: `NOW()`]
}

Ref:"batches"."id" < "users"."batch_id" [delete: cascade]

Ref:"users"."id" < "assignments"."user_id" [delete: cascade]

Ref:"users"."id" < "contest_participation"."user_id" [delete: cascade]

Ref:"contests"."id" < "contest_participation"."contest_id" [delete: cascade]

Ref:"users"."id" < "cf_contests"."user_id" [delete: cascade]

Ref:"users"."id" < "cf_stats"."user_id" [delete: cascade]
