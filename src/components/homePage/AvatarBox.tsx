import styles from './logo.module.css'
import type { MenuProps } from 'antd';
import { Dropdown, Avatar } from 'antd';

const AvatarBox = () => {
  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === "2") {
      location.href = "/login"
      localStorage.removeItem("token")
    }
    // message.info(`Click on item ${key}`);

  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="###">
          个人信息
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="###" onClick={() => {
          localStorage.removeItem("token")
          location.href = "/"
        }}>
          退出登录
        </a>
      ),
    }
  ]

  return (
    <div className={styles.avatarBox}>
      <span className='text-base mr-5'>用户名</span>
      <Dropdown menu={{ items, onClick }} placement="bottom" arrow>
        <a href="" onClick={(e) => e.preventDefault()}>
          <Avatar size={40} src="https://hooks.spicyboy.cn/assets/png/avatar-4ef6186b.png" />
        </a>
      </Dropdown>
    </div>
  );
};

export default AvatarBox;

