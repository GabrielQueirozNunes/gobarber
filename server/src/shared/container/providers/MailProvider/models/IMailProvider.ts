import iSendMailDTO from '@shared/container/providers/MailProvider/dtos/ISendMailDTO';

export default interface IMailProvider {
  sendMail(data: iSendMailDTO): Promise<void>;
}
