export const currentAge = (dob: string) : string => {
  if(!dob.includes('-')){
    return dob;
  }
    
  let today = new Date();
  let currYear:number = today.getFullYear();
  let dobYear: number = parseInt((dob).slice(0,4));
  return (currYear - dobYear).toString();
}
