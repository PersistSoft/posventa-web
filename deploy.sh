echo "Iniciando despliegue"
CID=$(docker ps -aqf "name=posventa-web-server")
echo $CID
echo "Detendiendo contenedor"
docker stop $CID
echo "Borrando contenedor"
docker rm $CID
echo "Borrando imagen"
docker rmi posventa-web-server
docker build -t posventa-web-server .
docker run -p 4250:4200 --name posventa-web-server -d posventa-web-server
echo "Terminando despliegue"
