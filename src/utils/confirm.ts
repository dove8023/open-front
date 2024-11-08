import { Modal } from 'antd';
const { confirm } = Modal;

interface ConfirmParams {
  title: string;
  content: string | React.ReactNode;
  okText?: string;
  cancelText?: string;
  onOk?: () => Promise<void>;
  onCancel?: () => void;
}

export default function confrimModal(params: ConfirmParams): Promise<boolean> {

  return new Promise((resolve, reject) => {
    confirm({
      title: params.title,
      content: params.content,
      okText: params.okText ? params.okText : '确认',
      cancelText: params.cancelText ? params.cancelText : '取消',
      onOk() {
        if (!params.onOk) {
          resolve(true);
          return;
        }

        params.onOk().then(() => {
          resolve(true);
        });
      },
      onCancel() {
        reject(false);
      },
    });
  });
}