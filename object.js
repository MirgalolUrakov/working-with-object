const userInfo = {
    id: 29,
    phoneNumber: "998 99 998 99 20"
} 

let husbandInfo = userInfo

const neighborInfo =  {
  "id": 44,
  "first_name": "Tuckie",
  "last_name": "Costy",
  "email": "tcosty17@admin.ch",
  "gender": "Bigender",
  "ip_address": "80.108.160.178",
  "grandMotherInfo": {
      "id": 41,
      "first_name": "Jerad",
      "last_name": "Hadlington",
      "email": "jhadlington14@netvibes.com",
      "gender": "Male",
      "ip_address": "170.160.137.203",
      "husbandInfo": { phoneNumber: "998 99 998 99 21", husbandInfo}
    }
}


const testData = {
      "id": 50,
      "first_name": "Molly",
      "last_name": "Pantling",
      "email": "mpantling1d@skype.com",
      "gender": "Female",
      "ip_address": "145.188.2.41",
      "friendInfo":  {
          "id": 48,
          "first_name": "Bianca",
          "last_name": "Cuffin",
          "email": "bcuffin1b@hexun.com",
          "gender": "Female",
          "ip_address": "7.51.67.94",
          "neighborInfo": neighborInfo
        }
      }
      function printName(obj){
       console.log('print-name', obj.first_name)
     }
     //printName(testData)
     function printName(obj){
       console.log('print-name', obj['first_name'])
     }
     //printName(testData)
     function printName(obj){
       const{ first_name } = obj;
       console.log('first-name', first_name )
     }
     //printName(testData)
     function printGender(obj){
       console.log('Mollys gender', obj.gender )
     }
     //printGender(testData)
     function printGender(obj){
       console.log('Mollys gender', obj['gender'])
     }
     //printGender(testData)
     function printGender(obj){
       const{ gender } = obj;
       console.log('Mollys gender', gender )
     }
     //printGender(testData)
     function printFriendEmail(obj){
       console.log('Mollys friend email', obj.friendInfo.email)
     }
     //printFriendEmail(testData)
     function printFriendEmail(obj){
       console.log('Mollys friend email', obj['friendInfo']['email'])
     }
     //printFriendEmail(testData)
     function printFriendInfo(obj){
       const{ friendInfo: { email }} = obj;
       console.log('Mollys gender', email )
     }
     //printFriendInfo(testData)
     function printFriendIpAddress(obj){
       // TODO: print Biance's IP Adress
       console.log('friend ip address', obj.friendInfo.ip_address)
     }
     //printFriendIpAddress(testData)
     function printFriendIpAddress(obj){
       // TODO: print Biance's IP Adress
       console.log('friend ip address', obj['friendInfo']['ip_address'])
     }
     //printFriendIpAddress(testData)
     function printFriendIpAddress(obj){
       // TODO: print Biance's IP Adress
      const{ friendInfo:{ip_address} } = obj;
       console.log('friends ip address', ip_address )
      }
      //printNeighborEmail(testData)
  function printNeighborEmail(obj){
    // TODO: print Biance's Neighbor Id
   console.log('Biances email', obj['friendInfo']['neighborInfo']['email'])
  }
  //printNeighborEmail(testData)
  function printNeighborEmail(obj){
    // TODO: print Biance's Neighbor Id
   const{ friendInfo:{neighborInfo:{email}} } = obj;
    console.log('Biances email', email )
  }
  //printNeighborEmail(testData)
  function printGrandmasHudbandPhone(obj){
    // TODO: print Biance's Neighbor Id
   console.log('Husband phone', obj.friendInfo.neighborInfo.grandMotherInfo.husbandInfo.phoneNumber)
  }
  //printGrandmasHudbandPhone(testData)
  function printGrandmasHudbandPhone(obj){
    // TODO: print Biance's Neighbor Id
   console.log('Husband phone', obj['friendInfo']['neighborInfo']['grandMotherInfo']['husbandInfo']['phoneNumber'])
  }
  //printGrandmasHudbandPhone(testData)
  function printGrandmasHudbandPhone(obj){
    // TODO: print Biance's Neighbor Id
   const{ friendInfo:{neighborInfo:{grandMotherInfo:{husbandInfo:{phoneNumber}}}} } = obj;
    console.log('Husband phone', phoneNumber )
  }
  //printGrandmasHudbandPhone(testData)
  function printUsersNumber(obj){
     // TODO: print Molly
    console.log('users phone', obj.phoneNumber)
  }
  //printUsersNumber(userInfo)
  function printUsersNumber(obj){
     // TODO: print Molly
    console.log('users phone', obj['phoneNumber'])
  }
  //printUsersNumber(userInfo)
  function printUsersNumber(obj){
     // TODO: print Molly
    const{ phoneNumber } = obj;
    console.log('users phone', phoneNumber )
  }
  //printUsersNumber(userInfo)
  function printGrandmasName(obj){
    // TODO: print Biance's Neighbor Id
   console.log('GrandmasName', obj.friendInfo.neighborInfo.grandMotherInfo.first_name)
  }
  //printGrandmasName(testData)
  function printGrandmasName(obj){
    // TODO: print Biance's Neighbor Id
   console.log('GrandmasName', obj['friendInfo']['neighborInfo']['grandMotherInfo']['first_name'])
  }
  //printGrandmasName(testData)
  function printGrandmasName(obj){
    // TODO: print Biance's Neighbor Id
   const{ friendInfo:{neighborInfo:{grandMotherInfo:{first_name}}} } = obj;
    console.log('GrandmasName', first_name )
  }
  //printGrandmasName(testData)
  function printUsersId(obj){MediaDevices
    console.log('UserId', obj.id)
  }
  //printUsersId(userInfo)
  function printUsersId(obj){
    console.log('UserId', obj['id'])
  }
  //printUsersId(userInfo)
  function printUsersId(obj){
    const{ id } = obj;
    console.log('UserId', id )
  }
  printUsersId(userInfo)