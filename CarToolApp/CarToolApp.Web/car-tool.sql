if object_id('dbo.Car') is not null
  drop table dbo.Car;
go

create table Car
(
  Id bigint identity constraint Car_pk primary key nonclustered,
  Make nvarchar(max),
  Model nvarchar(max),
  Year int default 1900,
  Color nvarchar(max),
  Price decimal(9) default 0
);
go

insert into Car (Make, Model, Year, Color, Price)
values (N'Ford', N'Fusion Hybrid', 2018, N'blue', 35000);
insert into Car (Make, Model, Year, Color, Price)
values (N'Tesla', N'S', 2017, N'red', 100000);
go

if object_id('dbo.User') is not null
  drop table [dbo].[User];
go

create table [User]
(
  Id bigint identity constraint User_pk primary key nonclustered,
  Username nvarchar(max),
  Password nvarchar(max)
);
go

insert into [User] (Username, Password)
values (N'demo', N'demo');
go

