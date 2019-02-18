# catstagram
a simple cat API

pregunta1: Podemos usar SAM, beanstalk Y aws lambda, para tener una aplicacion serverless
  -SAM nos permite tener un ambiente sin servidor, lo cual es ideoneo para una api tan directa
  - beanstalk nos permite configurar el balanceo de carga
  - aws nos permite ejecutar solo el codigo que se necesita cuando se necesita, de tal manera no hay desperdicio
pregunta2: Para desplegar esta app en aws, hay que generar una instancia de ec2, descargar el codigo mediante git, y configurar 
          beanstalk, luego se puede ir a route 53 para configurar el dominio.
pregunta3: analisis de requerimientos -> crear issues y asignarlos, crear una rama de dev, y luego ramas subsecuentes, generar los cambios
            -> subir los cambios a dev y probarlos -> subir cambios a produccion
pregunta4: AWS ofrece pipelines, los cuales son su solucion de integracion continua, si no, se puede usar jenkins
pregunta5: No logre implementar las pruebas unitarias, solo hay que agregarlas a las funciones principales, pero me concentre
          en la configuracion y despliegue.
