FROM public.ecr.aws/lambda/nodejs:14

COPY .build/ ${LAMBDA_TASK_ROOT}
RUN npm install --silent --no-lock --production

CMD [ "index.handler" ]
