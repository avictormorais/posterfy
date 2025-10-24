import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AlertModal from '../components/Commom/AlertModal';
import Models from '../assets/models.png'

const ModalContext = createContext();

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

export const ModalProvider = ({ children }) => {
    const { t, i18n } = useTranslation();
    const [modal, setModal] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const [shownAlerts, setShownAlerts] = useState(() => {
        const stored = localStorage.getItem('shownAlerts');
        return stored ? JSON.parse(stored) : {};
    });

    const getLocalizedDefaultAlert = () => {
        const translations = {
            en: {
                title: '🚀 Pre-made models',
                paragraph: 'Pre-made models allow you to quickly create posters based on existing templates. Choose a template, customize it, and generate your poster in seconds.',
                confirmText: 'Ok, I\'ll try!',
                postImageText: 'The models can be chosen after selecting a album.'
            },
            pt: {
                title: '🚀 Modelos pré-definidos',
                paragraph: 'Os modelos pré-definidos permitem que você crie rapidamente pôsteres baseados em templates existentes. Escolha um modelo, personalize-o e gere seu pôster em segundos.',
                confirmText: 'Ok, vou tentar!',
                postImageText: 'Os modelos podem ser escolhidos após selecionar um álbum.'
            },
            es: {
                title: '🚀 Modelos predefinidos',
                paragraph: 'Los modelos predefinidos te permiten crear rápidamente pósters basados en plantillas existentes. Elige una plantilla, personalízala y genera tu póster en segundos.',
                confirmText: '¡Ok, lo intentaré!',
                postImageText: 'Los modelos se pueden elegir después de seleccionar un álbum.'
            },
            zh: {
                title: '🚀 预制模型',
                paragraph: '预制模型允许您基于现有模板快速创建海报。选择一个模板，自定义它，并在几秒钟内生成您的海报。',
                confirmText: '好的，我试试！',
                postImageText: '可以在选择专辑后选择模型。'
            }
        };

        const currentLang = i18n.language || 'en';
        const langData = translations[currentLang] || translations.en;

        return {
            id: 'default-premade-models',
            persistentId: 'premade-models-intro',
            title: langData.title,
            paragraph: langData.paragraph,
            imageURL: Models,
            postImageText: langData.postImageText,
            confirmText: langData.confirmText,
            canClose: true,
            type: 'alert',
            limitDate: '2025-11-11T23:59:59.999Z'
        };
    };

    const hasAlertBeenShown = (persistentId) => {
        return shownAlerts[persistentId] === true;
    };

    const markSpecificAlertAsShown = (persistentId) => {
        if (!hasAlertBeenShown(persistentId)) {
            const updatedShownAlerts = { ...shownAlerts, [persistentId]: true };
            setShownAlerts(updatedShownAlerts);
            localStorage.setItem('shownAlerts', JSON.stringify(updatedShownAlerts));
        }
    };

    useEffect(() => {
        const defaultAlert = getLocalizedDefaultAlert();
        
        if (!hasAlertBeenShown(defaultAlert.persistentId) && !modal && isAlertValid(defaultAlert)) {
            setModal(defaultAlert);
        }
    }, [i18n.language, shownAlerts, modal]);

    const showModal = (modalData) => {
        if (isAlertValid(modalData)) {
            setModal(modalData);
            setIsClosing(false);
        }
    };

    const showAlert = (alertData) => {
        if (isAlertValid(alertData)) {
            showModal({ ...alertData, type: 'alert' });
        }
    };

    const showConfirmation = (confirmationData) => {
        showModal({ ...confirmationData, type: 'confirmation' });
    };

    const isAlertValid = (alertData) => {
        if (!alertData.limitDate) return true;
        
        const limitDate = new Date(alertData.limitDate);
        const currentDate = new Date();
        return currentDate <= limitDate;
    };

    const showConditionalAlert = (alertData) => {
        if (!alertData.persistentId) {
            if (isAlertValid(alertData)) {
                showAlert(alertData);
            }
            return;
        }

        if (!hasAlertBeenShown(alertData.persistentId) && isAlertValid(alertData)) {
            showModal({ ...alertData, type: 'alert' });
        }
    };

    const closeModal = () => {
        if (modal?.type === 'alert') {
            markAlertAsShown();
        }

        if (!modal || isClosing) return;
        setIsClosing(true);
        
        setTimeout(() => {
            setModal(null);
            setIsClosing(false);
            document.body.style.overflow = 'unset';
        }, 300);
    };

    const handleConfirm = () => {
        if (modal?.onConfirm) {
            modal.onConfirm();
        }
        if (modal?.type === 'alert') {
            markAlertAsShown();
        }
        closeModal();
    };

    const handleCancel = () => {
        if (modal?.onCancel) {
            modal.onCancel();
        }
        if (modal?.type === 'alert') {
            markAlertAsShown();
        }
        closeModal();
    };

    const markAlertAsShown = () => {
        if (modal?.persistentId) {
            markSpecificAlertAsShown(modal.persistentId);
        }
    };

    const value = {
        modal,
        showModal,
        showAlert,
        showConfirmation,
        showConditionalAlert,
        closeModal,
        isModalVisible: !!modal,
        hasAlertBeenShown,
        markSpecificAlertAsShown
    };

    return (
        <ModalContext.Provider value={value}>
            {children}
            {modal && (
                <AlertModal
                    title={modal.title}
                    paragraph={modal.paragraph}
                    imageURL={modal.imageURL}
                    postImageText={modal.postImageText}
                    canClose={modal.canClose}
                    confirmText={modal.confirmText}
                    onConfirm={modal.confirmText ? handleConfirm : null}
                    cancelText={modal.cancelText || null}
                    onCancel={modal.cancelText ? handleCancel : (modal.canClose ? closeModal : null)}
                    isClosing={isClosing}
                />
            )}
        </ModalContext.Provider>
    );
};