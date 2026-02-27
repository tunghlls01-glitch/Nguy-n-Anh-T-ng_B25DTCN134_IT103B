const teamHistory = [  
  {  
    name: "Messi",  
    position: "Forward",  
    nationality: "Argentina",  
    seasons: {  
      "2022-2023": {matches: 34, goals: 21, assists: 14, yellowCards: 3,},  
      "2023-2024": { matches: 32, goals: 25, assists: 15, yellowCards: 2,},  
      "2024-2025": { matches: 28, goals: 18, assists: 12, yellowCards: 1,},  
    },  
  },  
  {  
    name: "Ronaldo",  
    position: "Forward",  
    nationality: "Portugal",  
    seasons: {  
      "2022-2023": { matches: 38, goals: 28, assists: 8, yellowCards: 5 },  
      "2023-2024": { matches: 35, goals: 30, assists: 10, yellowCards: 4 },  
      "2024-2025": { matches: 30, goals: 22, assists: 9, yellowCards: 3 },  
    },  
  },  
];  

function generatePlayerSeasonReport(playerName, teamHistory) {
    let arrFind = teamHistory.find((value) =>{
        return value.name.toLowerCase() == playerName.toLowerCase();
    });
    // tổng matches 
    let totalMatches = Object.values(arrFind.seasons).reduce((acc, cur) => {
        return acc += cur.matches;
    }, 0);
    //tổng goals
    let totalGoals = Object.values(arrFind.seasons).reduce((acc, cur) => {
        return acc += cur.goals;
    }, 0);
    //tổng Assists
    let totalAssists = Object.values(arrFind.seasons).reduce((acc, cur) => {
        return acc += cur.assists;
    }, 0);
    //tổng yellowcards
    let totalYellowCards = Object.values(arrFind.seasons).reduce((acc, cur) => {
        return acc += cur.yellowCards;
    }, 0);
    // trung bình goals 
    let averageGoalsPerMatch = (totalGoals / Object.values(arrFind.seasons).length).toFixed(2);
    // trung bình assists 
    let averageAssistsPerMatch = (totalAssists / Object.values(arrFind.seasons).length).toFixed(2);
    // tìm mùa tốt nhất
    let maxGoals = Math.max(
        ...Object.values(arrFind.seasons).map((value) => {
            return value.goals;
        })
    );
    let arrBestSeason = Object.entries(arrFind.seasons).filter(([key, value]) => {
        return value.goals == maxGoals;
    });
    let years = arrBestSeason[0][0];
    let goal = arrBestSeason[0][1].goals
    let assist = arrBestSeason[0][1].assists;
    if (!arrFind) {
        let arr01 = { "Không tìm thấy cầu thủ": playerName };
        console.log(arr01);
        return;
    } else {
        let arr02 = {
            name: arrFind.name,
            position: arrFind.position,
            nationality: arrFind.nationality,
            careerStats: {
                totalMatches: totalMatches,
                totalGoals: totalGoals,
                totalAssists: totalAssists,
                totalYellowCards: totalYellowCards,
                averageGoalsPerMatch: averageGoalsPerMatch, 
                averageAssistsPerMatch: averageAssistsPerMatch,
                bestSeason: {
                    season: years,
                    goals: goal, 
                    assists: assist,
                }
                }
            }
            console.log(arr02);
        }
    };
    


generatePlayerSeasonReport("Messi", teamHistory);