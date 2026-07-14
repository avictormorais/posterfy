import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AlertModal from '../components/Common/AlertModal';

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

    const getKofiDonationAlert = () => {
        const translations = {
            en: {
                title: 'Support Posterfy! ☕',
                paragraph: 'If you love creating posters here, consider supporting us with a coffee! Your donation helps keep the servers running and the site completely free of intrusive ads.',
                confirmText: 'Support on Ko-fi'
            },
            pt: {
                title: 'Apoie o Posterfy! ☕',
                paragraph: 'Se você gosta de criar seus posters aqui, considere nos apoiar com um cafezinho! Sua doação ajuda a manter os servidores ativos e o site totalmente livre de anúncios intrusivos.',
                confirmText: 'Apoiadores no Ko-fi'
            },
            es: {
                title: '¡Apoya a Posterfy! ☕',
                paragraph: 'Si te encanta crear pósters aquí, ¡considera apoyarnos con un café! Tu donación ayuda a mantener los servidores activos y el sitio totalmente libre de anuncios molestos.',
                confirmText: 'Apoyar en Ko-fi'
            },
            zh: {
                title: '支持 Posterfy！☕',
                paragraph: '如果您喜欢在这里制作海报，请考虑请我们喝杯咖啡！您的捐赠将帮我们维持服务器运行，并保持网站完全没有打扰性广告。',
                confirmText: '在 Ko-fi 上支持'
            }
        };

        const currentLang = i18n.language || 'en';
        const langData = translations[currentLang] || translations.en;

        return {
            id: 'kofi-donation-alert',
            persistentId: 'kofi-donation-announcement',
            title: langData.title,
            paragraph: langData.paragraph,
            confirmText: langData.confirmText,
            canClose: true,
            type: 'alert',
            onConfirm: () => {
                window.open('https://ko-fi.com/posterfy', '_blank', 'noopener,noreferrer');
            }
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
        if (modal) return;

        const kofiAlert = getKofiDonationAlert();

        if (!hasAlertBeenShown(kofiAlert.persistentId) && isAlertValid(kofiAlert)) {
            setModal(kofiAlert);
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
                    disclaimerText={modal.disclaimerText}
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