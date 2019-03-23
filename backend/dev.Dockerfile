FROM python:3

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

ENV FOODSUBMISSIONS_POSTGRES_USER foodsubmissions
ENV FOODSUBMISSIONS_POSTGRES_PASSWORD password
ENV FOODSUBMISSIONS_POSTGRES_HOST db
ENV FOODSUBMISSIONS_POSTGRES_PORT 5432
ENV FOODSUBMISSIONS_POSTGRES_DB foodsubmissions

EXPOSE 5000

COPY . .

CMD ["sh", "start.sh"]