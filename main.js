// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// console.log(mockUpStrand());

// paequor factory functions

const pAequorFactory = (specimenNum, dna) => {
  
 return {
   specimenNum: specimenNum,
   dna: dna,

    mutate(){

    const mutatedDna = [];

    for(let i = 0; i < this.dna.length; i++){
      let oldBase = this.dna[i];
      let newBase = returnRandBase()
            
      if(oldBase != newBase){
          mutatedDna.push(newBase);
        }else {
          newBase = returnRandBase();
          mutatedDna.push(newBase);
        }
   }
   return mutatedDna
   },
   compareDNA(specimen){
      
      let count = 0; 
      for(let i = 0; i < specimen.length;i++){
        let x = specimen[i];
        let y = this.dna[i];
        if(x === y){
          count++;

        }
      }
      const percentageCommon = (count/specimen.length)*10;
      console.log(`specimen #1 and specimen #2 have ${percentageCommon.toFixed(3)}% DNA in common`)

   },
   willLikelySurvive(){
     let count = 0;
     for(let x of this.dna){
        if(x === 'C' || x === 'G'){
         count++;
       }
     }
     
    //  let y be percentage of C and D bases
    let y = (count/this.dna.length)*100;
    if(y >= 60){
      return true;
    }else{
      return false;
    }
   },
   complementStrand(){
    let complementingStrand = [];
      for (let x of this.dna) {
        switch (x) {
          case 'A':
            complementingStrand.push('T');
            break;
          case 'T':
            complementingStrand.push('A');
            break;
          case 'C':
            complementingStrand.push('G');
            break;
          case 'G':
            complementingStrand.push('C');
            break;
        }
      }
      return complementingStrand;

   },

   
 }

}
const dna = mockUpStrand();
// console.log(pAequorFactory(1,dna).willLikelySurvive())

const pAequorSamples = [];
let count= 1;
while(pAequorSamples.length < 30){
  let x = pAequorFactory(count,dna);
  if(x.willLikelySurvive() === true){
    pAequorSamples.push(x);
    count ++;
  }
}

console.log (pAequorSamples.length);

