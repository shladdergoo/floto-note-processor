FROM public.ecr.aws/lambda/nodejs:14

COPY package.json ${LAMBDA_TASK_ROOT}
RUN npm install --silent --no-lock --production

COPY lib/* ${LAMBDA_TASK_ROOT}

CMD [ "index.handler" ]
