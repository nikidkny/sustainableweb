export default function GettingCo2({month}) {

  
  
  const totalCO2=1.89/* total= 1.89kgco2 per month per person */
  const totalTrees=53.33 /* total of tress per mont to clean totalCO2 */

  const kgco2Month=month*0.233;/* user production c02 per month by watching netflix*/
  
  const trees=(kgco2Month/totalTrees)*totalCO2 /*netflix is x% of usage related with the total of co2 produce per person per month */
const treesM=Math.ceil(trees)

  console.log(kgco2Month,"co2 in use");
  console.log(trees,"tree per month")
  console.log(treesM,"tree per monthM")


  return <>
  <h2>That means that the amount of trees to process your  
  <h2>{kgco2Month}kgCo2</h2> emition for watching {month} hours of Netflix a month is: {treesM} tree(s) </h2>
    </>; 
}
