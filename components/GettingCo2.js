export default function GettingCo2({month}) {

  
  
  const totalCO2=1.89/* total= 1.89kgco2 per month per person */
  const totalTrees=53.33 /* total of tress per mont to clean totalCO2 */

  const kgco2Month=Math.round((month*0.233)*100)/100;/* user production c02 per month by watching netflix*/
  

   return <>
  <h2>That means that the amount of trees to process your  
  <h2>{kgco2Month}kgCo2</h2> emition for watching {month} hours of Netflix a month is: {Math.ceil((kgco2Month/totalTrees)*totalCO2 )} tree(s) </h2>
    </>; 
}
