//% color="#7C3AED" weight=100 icon="\uf1b2" block="THINGY"
namespace TestDummy {
    /** 
     * Does a thing
     */
    //% group="Gameplay"
    //% block="str %a"
	export function functio(a: string) {
		return a
    }
	/**
     * Does a thing
     */
	//% group="Gameplay"
    //% block=""
    export function f(a: () => void) {
        return a
    }
}
console.log(0)
