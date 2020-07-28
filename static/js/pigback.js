// vamos a crear una alcancia
// limite
// solo se puede sacar cuando este llena o despues de cada 3 dias de haber sacado y si este es el caso solo
// se puede sacar 20 pesos
// Se puede ingresar dinero siempre minimo 50 pesos

const crearAlcancia = function(limite, total) {
  this.limite = limite
  this.total = total 

   
  const ingresar = (deposito) => {
      if(deposito + this.total <= this.limite )  {
          this.total += deposito
      }else {
        console.log('esta llena')
      }
  }

  
}

const pig = crearAlcancia(100, 0)
pig.ingresar(20)
pig.ingresar(80)
pig.ingresar(30)
pig.ingresar(30)


