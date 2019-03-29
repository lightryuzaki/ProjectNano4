FROM gradle:5.2.1-jdk8

COPY . .

CMD ["gradle", "run", "2>&1"]