import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AlertModal from '../components/Commom/AlertModal';

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

    const getTopAlbumsAlert = () => {
        const translations = {
            en: {
                title: 'Top Albums This Week',
                paragraph: 'Discover what\'s trending! The most popular albums of the week will be highlighted at the top of the site. Don\'t miss what everyone is creating posters for!'
            },
            pt: {
                title: 'Top Álbuns da Semana',
                paragraph: 'Descubra as tendências! Os álbuns mais populares da semana aparecerão em destaque no topo do site. Não perca o que todos estão criando posters!'
            },
            es: {
                title: 'Álbumes Destacados de la Semana',
                paragraph: 'Descubre las tendencias. Los álbumes más populares de la semana se destacarán en la parte superior del sitio. No te pierdas lo que todos están creando!'
            },
            zh: {
                title: '本周热门专辑',
                paragraph: '发现趋势！本周最受欢迎的专辑将在网站顶部突出显示。不要错过每个人都在为之创建海报的内容！'
            }
        };

        const currentLang = i18n.language || 'en';
        const langData = translations[currentLang] || translations.en;

        return {
            id: 'top-albums-feature',
            persistentId: 'top-albums-announcement',
            title: langData.title,
            paragraph: langData.paragraph,
            canClose: true,
            type: 'alert',
            limitDate: '2026-04-20T23:59:59.999Z'
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

        const topAlbumsAlert = getTopAlbumsAlert();
        if (!hasAlertBeenShown(topAlbumsAlert.persistentId) && isAlertValid(topAlbumsAlert)) {
            setModal(topAlbumsAlert);
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
