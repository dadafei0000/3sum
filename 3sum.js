var threeSum = function(nums) {
     var re=[];

  nums.sort((a,b)=>a-b);

  for(var i=0;i<nums.length-2;i++){

    if(nums[i]>0||nums[nums.length]<0) break;

    if(i>0 && nums[i]==nums[i-1]) continue;

    var lp=i+1;

    var rp=nums.length-1;

    while(lp<rp){

      var sum=nums[i]+nums[lp]+nums[rp];

      if(sum>0) rp=rp-1;

      else if(sum<0) lp=lp+1;

      else{

        re.push([nums[i],nums[lp],nums[rp]]);

        if(lp<rp && nums[lp]==nums[lp]+1) lp=lp+1;

         if(lp<rp && nums[rp]==nums[rp]-1) rp=rp-1;

        lp=lp+1;

        rp=rp-1;

      }

    }

  }

var  rep= re.map(JSON.stringify).reverse().filter(function (e, i, a) {
    return a.indexOf(e, i+1) === -1;
}).reverse().map(JSON.parse);
 return rep;

};
