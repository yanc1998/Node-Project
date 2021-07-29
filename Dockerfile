FROM docker.uclv.cu/node 

COPY package*.json ./

RUN npm install

WORKDIR /node