
  //example 3
  async function main() {
      
    console.log("Hello");
    setTimeout(() => { console.log("World!"); }, 30000);
    
    
    //throw an exception
    throw new Error('This is going to keep the container running')
    console.log("Goodbye!");
  }
  
  main();
