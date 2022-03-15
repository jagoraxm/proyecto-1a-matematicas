module.exports = {
    /**
     * Suma de dos numeros
     * @example
     * n1 = 1, n2 = 3 => resultado 4
     * @param {*} n1 Numero uno de la suma
     * @param {*} n2 Numero dos de la suma
     * @returns 
     */
    suma: function(n1, n2) {
        return (this.esNumero(n1, n2) ? n1 + n2 : this.mensajeError());
    },
    /**
     * Resta de dos numeros
     * @example
     * n1 = 1, n2 = 3 => resultado 4
     * @param {*} n1 Numero uno de la resta
     * @param {*} n2 Numero dos de la resta
     * @returns 
     */
    resta: function(n1, n2) {
        return (this.esNumero(n1, n2) ? n1 - n2 : this.mensajeError());
    },
    /**
     * Division de dos numeros
     * @example
     * n1 = 1, n2 = 3 => resultado 0.3333
     * @param {*} n1 Numero uno de la division
     * @param {*} n2 Numero dos de la division
     * @returns 
     */
    division: function(n1, n2) {
        return (this.esNumero(n1, n2) ? n1 / n2 : this.mensajeError());
    },
    /**
     * Multiplicacion de dos numeros
     * @example
     * n1 = 1, n2 = 3 => resultado 3
     * @param {*} n1 Numero uno de la multiplicacion
     * @param {*} n2 Numero dos de la multiplicacion
     * @returns 
     */
    multiplicacion: function(n1, n2) {
        return (this.esNumero(n1, n2) ? n1 * n2 : this.mensajeError());
    },
    /**
     * Mensaje de error que se ejecuta cuando no tengamos valores numéricos
     */
    mensajeError: function() {
        console.log('Un valor o los dos valores no son numéricos');
    },
    /**
     * Comprueba que los valores sean numéricos
     * @param {*} n1 
     * @param {*} n2 
     * @returns 
     */
    esNumero: function(n1, n2) {
        if(typeof n1 !== 'number' || typeof n2 !== 'number') return false;

        return true;
    }
}