import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import React from 'react';

function App() {
  return (
<>
    <header className="hero" id="0">
      <nav className="nav container">
        <div className="nav__logo">
          <h2 className="nav__title">Aprendiendo js</h2>
        </div>
        <ul className="nav__link nav__link--menu">
          <li className="nav__items">
            <a href="./index.html" className="nav__links salto">
              Que es js?
            </a>
          </li>
          <li className="nav__items">
            <a href="./Ejercicios.html" className="nav__links salto">
              Ejercicios
            </a>
          </li>
          {/* <li className="nav__items">
            <a href="./Tecno.html" className="nav__links salto">
              Tecnologias vistas
            </a>
          </li> */}
          <li className="nav__items">
            <a href="./Juego/index.html" className="nav__links salto">
              Juego
            </a>
          </li>
        </ul>
      </nav>
    </header>
   
          
     


    <nav class="fixxed__header" id="mi-encabezado">
        <ul class="nav_indice">
            
            <a href="#0" class="nav_indice__a salto">Indice</a>
            <a href="#1" class="nav_indice__a salto">Que es js?</a>
            <a href="#2" class="nav_indice__a salto">Usos</a>
            <a href="#3" class="nav_indice__a salto">Tipos de Datos</a>
            <a href="#4" class="nav_indice__a salto">Variables</a>
            <a href="#5" class="nav_indice__a salto">Funciones</a>
            <a href="#6" class="nav_indice__a salto">Array</a>
           
            
            
        </ul>
    </nav>
 
    

    <section class="knowledge " id="1">
        <div class="knowledge__container container ">   
                <img src="./img/logo_js.png" class="knowledge__img" onclick="toggleTheme()"/>
                <h2 class="subtitle" >Que es js?</h2>
               
        </div>
        <div class=" container  aumentar">   
            <p class="knowledge__paragraph__p">JavaScript es uno de los lenguajes de programación más usados y populares del mundo. Nació en 1995 para darle interactividad a las páginas web y desde entonces ha evolucionado hasta convertirse en un lenguaje de programación de propósito general. Dicho de otra forma: se puede usar casi para cualquier cosa.</p>    
        </div>



    </section>

    <section class="knowledge " id="2" >
        <div class="knowledge__container container">   
                <img src="./img&/" class="knowledge__img"/>
                <h2 class="subtitle">Usos</h2>
        </div> 
        <div class="container  aumentar">   
            <p class="knowledge__paragraph__p">JavaScript (JS) es un lenguaje de programación 
                utilizado principalmente para agregar interactividad y dinamismo a las páginas 
                al aprender este lenguaje se abrira una apmlñia gama de quehaceres con el como porejemplo 
                el usos de frameworks para el desarrollo web o para el lado del servidor 
            
            
            </p>
        </div>   
    </section>


    <section class="knowledge "id="3">
        <div class="knowledge__container container ">   
                <img src="./img/Tipod de datos.png" class="knowledge__img"/>
                <h2 class="subtitle">Tipos de Datos</h2>
        </div>
        <div class=" aumentar container  ">   
                <p class="knowledge__paragraph__p ">En JavaScript, como cualquier otro lenguaje de programación, 
                    vamos a querer trasladar la información del mundo real a nuestro código. Para ello, necesitamos
                    datos y los difernetes tipos que hay:</p>   
            <div class="knowledge__paragraph__p container Titulos ">     
                <h2>Números</h2>
                    <p>Números: Los números (tipo number) son los datos más básicos que podemos representar en JavaScript. En JavaScript, no hay una diferencia entre números enteros y números decimales, todos los números son de tipo number:</p>
                        <ul>
                            <li>7</li>
                            <li>3.14</li>
                            <li>19.95</li>
                            <li>2.998e8</li>
                            <li>-1</li>
                        </ul>

                <h3>Operadores aritméticos</h3>
                    <p>Con los números, puedes usar los operadores aritméticos para realizar operaciones matemáticas. En JavaScript tenemos los siguientes operadores aritméticos:</p>
                        <ul>
                            <li>+: suma</li>
                            <li>-: resta</li>
                            <li>*: multiplicación</li>
                            <li>/: división</li>
                            <li>%: módulo (resto de la división)</li>
                            <li>**: exponente</li>
                        </ul>

                <h2>Cadenas de texto</h2>
                    <p>La cadena de texto (tipo string) es otro tipo de dato muy común. En JavaScript, las cadenas de texto se representan entre comillas simples, dobles o acentos graves:</p>
                        <ul>
                            <li>'Estás aprendiendo JavaScript'</li>
                            <li>"JavaScript te va a gustar"</li>
                            <li>`Esto es una cadena de texto`</li>
                        </ul>

                    <p>Las comillas simples y dobles funcionan igual, pero al usar acentos graves podemos escribir cadenas de texto que ocupen varias líneas:</p>

                        <pre>
                        `Esto es una cadena de texto
                        que ocupa varias líneas. Puedes escribir
                        tantas líneas como quieras`
                        </pre>
                
                <h2>Booleanos en JavaScript</h2>
                    <p>Los booleanos representan sólo dos valores: <strong>true</strong> (verdadero) o <strong>false</strong> (falso). Por ejemplo:</p>    
                        <ul>
                            <li>¿La luz está encendida (<strong>true</strong>) o apagada (<strong>false</strong>)?</li>
                            <li>¿Está lloviendo (<strong>true</strong>) o no está lloviendo (<strong>false</strong>)?</li>
                            <li>¿Está el usuario logueado (<strong>true</strong>) o no está logueado (<strong>false</strong>)?</li>
                        </ul> 
                    <p>Estos son ejemplos de preguntas que podemos responder con un valor booleano.</p> 
                        <pre><code>true false</code></pre>       

               <h2>La diferencia entre null y undefined</h2>
                    <p>Mientras que <strong>null</strong> es un valor que significa que algo no tiene valor, <strong>undefined</strong> significa que algo no ha sido definido. Por ejemplo, si creamos una variable sin asignarle ningún valor, su valor será <strong>undefined</strong>:</p>
                        <pre><code>let rolloDePapel // -&gt; undefined</code></pre>

                    <p>También podemos asignar directamente el valor <strong>undefined</strong> a una variable:</p>
                        <pre><code>let rolloDePapel = undefined // -&gt; undefined</code></pre>
                    <p>En cambio, para que una variable tenga el valor <strong>null</strong>, sólo podemos conseguirlo asignándole explícitamente ese valor:</p>
                        <pre><code>let rolloDePapel = null</code></pre>
               
            </div>
        </div>
    </section>

    <section class="knowledge " id="4">
        <div class="knowledge__container container">   
                <img src="./img/variables_js.png" class="knowledge__img"/>
                <h2 class="subtitle">Variables</h2>
        </div> 
        <div class="container  aumentar">         
                <div class="caja ">
                    <p class="knowledge__paragraph__p">
                        Al igual que hemos visto en otras Tecnologías una variable es un contenedor que
                        almacena datos que pueden ser c modificados, dentro de estas variables el dito de dato que 
                        puedes introducir es muy variable como números, cadenas de texto, objetos, arreglos, funciones.
                        Su utilidad para almacenar puede ser usada para referencias y manipuladidad en el código.
    
                    <img class="knowledge__img__float" src="./img/variables_explicacion.png"/>
                  </p>
                </div>
        </div> 
    </section>

    


    <section class="knowledge " id="5">
        <div class="knowledge__container container">   
                <img src="./img/funciones_js.png" class="knowledge__img"/>
                <h2 class="subtitle">Funciones</h2>
        </div> 
        <div class="container  aumentar">   
            <p class="knowledge__paragraph__p">Las funciones en JavaScript son bloques de código que 
                realizan una tarea específica y que se pueden reutilizar a voluntad. Por ejemplo, puedes crear 
                una función que calcule la suma de dos numeros distintos, y luego llamarla cada vez que necesites realizar esa operación.

                Para crear una función, puedes usar una declaración de función o una expresión de función. 
                Una declaración de función tiene la forma:<img class="knowledge__img__float" src="./img/Funciones.png"/></p> </div> 
                
    </section> 


    <section class="knowledge " id="6">
        <div class="knowledge__container container">   
                <img src="./img/arrays-js.png" class="knowledge__img"/>
                <h2 class="subtitle">Array</h2>
        </div> 
        <div class="container  aumentar">   
            <p class="knowledge__paragraph__p">Los arrays es una estructura de base de datos que permite el almacenamieto y con
                esta es una colección del tipos de datos, pudiendo almacenarlos en ellos las cosas borradas de otros y cosas distinras
                dando asi una gran forma de manipulacion de datos;  <img class="knowledge__img__float" src="./img/arrays.png"/></p>   
        </div> 
    </section>


    <footer class="footer">
        <div class="footer-content">
            <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
    </footer>



   



          </>
  );
}

export default App;
