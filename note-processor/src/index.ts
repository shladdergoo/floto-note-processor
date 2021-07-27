import * as logger from 'npmlog';

export const handler = async (event: any = {}): Promise<any> => {
  const prefix: string = 'floto-note-processor';

  logger.info(prefix, 'start');

  const response = JSON.stringify(event, null, 2);

  logger.info(prefix, 'complete');
  return response;
};
