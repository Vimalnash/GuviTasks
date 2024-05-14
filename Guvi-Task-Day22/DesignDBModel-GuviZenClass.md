Design DB model for Guvi Zen class - SQL

// Basic Course Details
CREATE TABLE GuviZenClass_Course (
	id INTEGER PRIMARY KEY,
	CreatedDate DATE,
	BatchNo VARCHAR,
	CourseName TEXT,
	CourseAbbreviation TEXT,	
	TeachLanguage TEXT,
	Mentor_Info_id INTEGER FOREIGN KEY,
	StartDate DATE,
	CompletedDate DATE,
	isCompleted BOOLEAN
)

// All Student Master Details
CREATE TABLE Stud_Basic_Info (
	id INTEGER PRIMARY KEY,
	Name TEXT,
	MobileNO INTEGER,
	EmailId VARCHAR,
	isPaymentDone BOOLEAN,
	GuviZenClass_Course_Id INTEGER FOREIGN KEY,
)

// All Mentor Master Details
CREATE TABLE Mentor_Info (
	id INTEGER PRIMARY KEY,
	Name TEXT,
	MobileNO INTEGER,
	EmailId VARCHAR,
	TeachLanguage TEXT
)

// Guvi Zen Class Each Day  Details
CREATE TABLE GuviZenClass (
	id INTEGER PRIMARY KEY,
	Date DATE,	
	Day TEXT,
	Timings VARCHAR,
	Batch_Mrng_Eve TEXT,
	Session_MainOrAdd TEXT,
	SessionsRoadmap INTEGER
	Topic TEXT,
	isTask BOOLEAN,
	Mentor_Info_id INTEGER FOREIGN KEY,
	isRecording BOOLEAN DEFAULT True,
	Recording_Link VARCHAR,
	Task_Link VARCHAR,
	GuviZenClass_Course_Id INTEGER FOREIGN KEY
);

// Guvi Zen Class Content Details which covers different topic contents
CREATE TABLE Class_Content (
	id INTEGER PRIMARY KEY,
	GuviZenClass_id INTEGER FOREIGN KEY,
	Row_id INTEGER,
	Content VARCHAR
)

// Guvi Zen Class Pre-Read Content Details - like Links or No Read,..
CREATE TABLE Class_PreRead_Cont(
	id INTEGER PRIMARY KEY,
	GuviZenClass_id INTEGER FOREIGN KEY,
	Row_id INTEGER,
	PreRead_Content VARCHAR
)

// Student Daily Feedback form which is part of Guvi Zen Class which links in the same page.
CREATE TABLE Stud_Feedback(
	id INTEGER PRIMARY KEY,
	Date DATE,
	Session_Feedback VARCHAR,
	Session_FB_Rating INTEGER,
	Mentor_Feedback VARCHAR,
	Mentor_FB_Rating INTEGER,
	Key_Takeaways VARCHAR,
	Stud_Basic_Info_id INTEGER FOREIGN KEY,
	GuviZenClass_id INTEGER FOREIGN KEY,
)

// Zen Class Taks Activities if applicable and submission links to store from each student
CREATE TABLE Class_Task_Activities (
	id INTEGER PRIMARY KEY,
	GuviZenClass_id INTEGER FOREIGN KEY,
	Stud_Basic_Info_id INTEGER FOREIGN KEY,
	Row_id INTEGER,
	Front-end_Source_code VARCHAR,
	Front-end_Deployed_URL VARCHAR,
)

// Zen Class Task Activities submission
CREATE TABLE Class_Task_Comments (
	id INTEGER PRIMARY KEY,
	GuviZenClass_id INTEGER FOREIGN KEY,
	Stud_Comments VARCHAR,
	Mentor_Comments VARCHAR,
	Marks INTEGER
)

// No Need Below for submission

CREATE TABLE Stud_Perform (
	id INTEGER PRIMARY KEY,
	Stud_Basic_Info_id,
	Tasks_OverAll INTEGER,
	Tasks_Pending INTEGER,
	Tasks_Completed INTEGER,
)

CREATE TABLE Stud_Task_Details (
	id INTEGER PRIMARY KEY,
	
)
	FeedBack_id INTEGER FOREIGN KEY,