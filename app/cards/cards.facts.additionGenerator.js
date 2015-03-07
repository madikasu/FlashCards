(function() {
  'use strict';
  
  angular.module('app.factories')
    .factory('AdditionFactsGeneratorService', AdditionFactsGeneratorService);
  
  
  function AdditionFactsGeneratorService(){
    var facts = {
        'A': [ 
          [1,2],[1,3]
        ],
        'B':[
          [1,4],[1,1]
        ],
        'C':[
          [1,5],[2,2]
        ],
        'D':[
          [1,6],[3,3]
        ],
        'E':[
          [1,7],[4,4]
        ],
        'F':[
          [1,8],[5,5]
        ],
        'G':[
          [1,9],[0,'*']
        ],
        'H':[
          [2,3],[6,6]
        ],
        'I':[
          [4,2],[7,7]
        ],
        'J':[
          [5,2],[8,8]
        ],
        'K':[
          [6,2],[9,9]
        ],
        'L':[
          [7,2],[4,7]
        ],
        'M':[
          [8,2],[8,6]
        ],
        'N':[
          [9,2],[9,6]
        ],
        'O':[
          [4,3],[6,7]
        ],
        'P':[
          [5,3],[7,8]
        ],
        'Q':[
          [5,8],[7,9]
        ],
        'R':[
          [6,3],[5,9]
        ],
        'S':[
          [7,3],[8,9]
        ],
        'T':[
          [8,3],[4,9]
        ],
        'U':[
          [9,3],[5,7]
        ],
        'V':[
          [4,5],[4,8]
        ],
        'W':[
          [4,6],[5,6]
        ]
    
      };
    var op = '+';
    
    function generateFactsForLevel(level){
      var fact = facts[level];
      var arr = [];
      
      
      
      
    }
    
  }

})();