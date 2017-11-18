# HeadHunter-Backend
Backend Server for KYN

HeadHunter API Document
===
This document explains about API Routes and Socket Connection Policy of HeadHunter Game Client.

Running Server
====

	Description is based by root derectory of repository.

	node www/bin

Authenticate
===
Description of Authenticate Method in Client

	Using Local Server Login Only

Sign Up with /auth/register, Sign In with /auth/login

Client MUST save User's id String after authentication.

API Auth
===
HeadHunter's API are opened, no authentication are needed.

DB Schema
===
Describes about Database Schema.

User DB
----
Means Single User.

	_id : User's identity number. Random Value. String

	nickname : User's nickname. String

	password : User's Auth Password. String

	win_count : Winned Count. Number

	lose_count : Losed Count. Number

	mmr : Rank Count. Number

	acc_count : Accumulated count value of played game. Number

	gold :  In-Game Money Value. Number

	con_item : Array of Consumable items. Schema Object ID(Consumable Schema)

	equipment : Array of Equipments. Schema Object Id(Equipment Schema)

Consumable Schema
---
Means Single Consumable items

	_id : Item's identity Number. String

	name : Name of item. String

	description : Description of item. String

Equipment Schema
-----
Means Sinble Equipments

	_id : Item's identity Number. String

	name : Name of item. String

	descirption : Description of item. String

	part : Wearable Part of item. Number

API Ref
======
Error Catch
----
Error code has uniformed by HTTP Status 401.

User
----
### /user/auth/register : Sign Up

	nickname : User's nickname
	password : User's password

Returns Created User Schema Value

### /user/auth/login : Sign in

	nickname : User's nickname
	password : User's password

Return

	401 : Undefined
	403 : Invalid Data
	404 : User Not found
	200 : User Data

### /user/update/gold : Update User's Gold Value

	id : User Scheme id
	value : Update Target Value

Return

	Updated Schema

### /user/update/item : Update User's Item Array

	id : User Scheme id
	value : Update Target Value (VALUE FORMAT MUST BE ARRAY!)

Return

	Updated Schema

### /user/update/equip : Update User's Equipment Array

	id : User Scheme id
	value : Update Target Value (VALUE FORMAT MUST BE ARRAY!)

Return

	Updated Schema

