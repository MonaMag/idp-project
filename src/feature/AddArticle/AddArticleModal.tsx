import { useState } from 'react';
import { Button, Modal } from 'antd';
import AddArticleForm from './AddArticleForm';
import { useAddArticleMutation } from '../../entities/Article/api/articlesApi';

interface AddArticleModalProps {
  className?: string;
}

export const AddArticleModal = ({ className }: AddArticleModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createArticle, {}] = useAddArticleMutation();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Создать статью
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={800} footer={null}>
        <AddArticleForm onClose={handleCancel} onOk={handleOk} createArticle={createArticle} />
      </Modal>
    </>
  );
};
