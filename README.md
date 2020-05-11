# Project Overview

## Project Name

Let's Play a Jeopardy!

## Project Description

This project aims to build a simple web application that allows a single player to practice the popular American game Jeopardy. It has a similar make and feel of the real game with the real clues.

## API and Data Sample

The game part of the project uses the APIs from http://jservice.io/.

It will make 2 API calls from the data source:
1. Get random categories from /api/categories
2. Fetch the clues for each category generated from /api/clues

#### API Data Sample (Clue)
```json
[
    {
        "id": 87878,
        "answer": "Cory",
        "question": "This character is \"in the House\"--the White House, that is--when his dad starts working there on this Disney show",
        "value": 200,
        "airdate": "2009-07-14T12:00:00.000Z",
        "created_at": "2014-02-14T01:53:32.457Z",
        "updated_at": "2014-02-14T01:53:32.457Z",
        "category_id": 11540,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 11540,
            "title": "kids' tv",
            "created_at": "2014-02-14T01:53:32.255Z",
            "updated_at": "2014-02-14T01:53:32.255Z",
            "clues_count": 5
        }
    }
]
```

## Wireframes
Home Page (Mobile): 

![Home Page](https://res.cloudinary.com/dvmkqx6v1/image/upload/v1589165143/Mobile_1_ktlt1a.png)


Game Page (Mobile): 

![Game Page](https://res.cloudinary.com/dvmkqx6v1/image/upload/v1589165143/Mobile_2_ls4oaq.png)


### MVP/PostMVP  
#### MVP 

- Create a game
- See the Jeopardy table with 6 randomly chosen categories and clues with the money amount
- Choose one clue each time
- Enter the answer and see if it's right
- Checks the scores based on right/wrong answers
- Be able to exit the game at any time and starts over

#### PostMVP  

- Add second API to greet users in their native language on the home page
- Add third API to direct users to Wikipedia to learn more about the specific answer
- Add a timer to count down answering time

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|May 11| Project Prompt and Project Approval | WIP 
|May 12| Core Application Structure and Pseudocode | 
|May 13| Fetch random categories and clickable clues  |
|May 13| Fetch clues from the API and check user input | 
|May 14| Record user scores | 
|May 14| MVP and finalize formatting | 
|May 15| Present | 

## Priority Matrix

![Priority Matrix](https://res.cloudinary.com/dvmkqx6v1/image/upload/v1589166353/Priority_Matrix_brxnhr.png)


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Structure | M | 2hrs|  |  |
| Basic CSS | M | 2hrs|  |  |
| Creating a game with random categories from the API | H | 4hrs|  |  |
| Fetch the clues from the API for each category | H | 4hrs|  |  |
| Check user answers and record scores | H | 4hrs|  |  |
| Clickable clue popup and input form | H | 4hrs|  |  |
| Track scores | H | 4hrs|  |  |
| Finish/quit game and display results | H | 4hrs|  |  |
| Additional styling | L | 4hrs|  |  |
| Total | H | 32hrs|  |  |

## Code Snippet


## Change Log

