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
                title: 'Join the community!',
                paragraph: 'Join our Discord server to contribute to the platform and help other users. Share ideas, report bugs, and connect with fellow music lovers!',
                confirmText: 'Join the server',
                postImageText: 'Help us grow the Posterfy community.'
            },
            pt: {
                title: 'Junte-se à comunidade!',
                paragraph: 'Entre no nosso servidor do Discord para contribuir com a plataforma e ajudar outros usuários. Compartilhe ideias, reporte bugs e conecte-se com outros amantes da música!',
                confirmText: 'Entrar no servidor',
                postImageText: 'Ajude-nos a crescer a comunidade do Posterfy.'
            },
            es: {
                title: '¡Únete a la comunidad!',
                paragraph: 'Únete a nuestro servidor de Discord para contribuir a la plataforma y ayudar a otros usuarios. Comparte ideas, reporta errores y conéctate con otros amantes de la música!',
                confirmText: 'Entrar al servidor',
                postImageText: 'Ayúdanos a crecer la comunidad de Posterfy.'
            },
            zh: {
                title: '加入社区！',
                paragraph: '加入我们的 Discord 服务器，为平台做出贡献并帮助其他用户。分享想法、报告错误，并与其他音乐爱好者联系！',
                confirmText: '加入服务器',
                postImageText: '帮助我们发展 Posterfy 社区。'
            }
        };

        const currentLang = i18n.language || 'en';
        const langData = translations[currentLang] || translations.en;

        return {
            id: 'discord-community',
            persistentId: 'discord-community-intro-2',
            title: langData.title,
            paragraph: langData.paragraph,
            postImageText: langData.postImageText,
            confirmText: langData.confirmText,
            canClose: true,
            type: 'alert',
            limitDate: '2026-01-20T23:59:59.999Z',
            onConfirm: () => window.open('https://discord.gg/983sEBVzcs', '_blank')
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
    }, [i18n.language, shownAlerts]);

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
                    customButton={modal.customButton}
                />
            )}
        </ModalContext.Provider>
    );
};