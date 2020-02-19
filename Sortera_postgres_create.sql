CREATE TABLE "users" (
	"_id" serial,
	"username" VARCHAR(255) NOT NULL UNIQUE,
	"password" varchar(100) NOT NULL,
	"email" VARCHAR(255) NOT NULL UNIQUE,
	"downloads" integer NOT NULL,
	"subscriber_status" BOOLEAN NOT NULL DEFAULT 'false',
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "images" (
	"_id" serial NOT NULL UNIQUE,
	"user_id" integer,
	"tag" VARCHAR(255) NOT NULL,
	"created_at" DATE NOT NULL,
	CONSTRAINT "images_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "sessions" (
	"_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"created_at" TIMESTAMP NOT NULL,
	CONSTRAINT "sessions_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "images" ADD CONSTRAINT "images_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("_id");
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("_id");
