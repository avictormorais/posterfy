import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AlertModal from '../components/Commom/AlertModal';
import CoverEditorGif from '../assets/coverEditor.gif'

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

    const getCoverEditorAlert = () => {
        const translations = {
            en: {
                title: 'New Cover Editor!',
                paragraph: 'Inside the poster editor, you can now customize your album cover with zoom, position adjustments, and blur effects. Click on "Cover editor" to try it out!',
                confirmText: 'Try it now!',
                postImageText: 'Customize your poster like never before.'
            },
            pt: {
                title: 'Novo Editor de Capa!',
                paragraph: 'Dentro do editor de poster, agora você pode personalizar a capa do álbum com zoom, ajustes de posição e efeitos de desfoque. Clique em "Editor de capa" para experimentar!',
                confirmText: 'Experimentar agora!',
                postImageText: 'Personalize seu poster como nunca antes.'
            },
            es: {
                title: '¡Nuevo Editor de Portada!',
                paragraph: 'Dentro del editor de póster, ahora puedes personalizar la portada del álbum con zoom, ajustes de posición y efectos de desenfoque. ¡Haz clic en "Editor de portada" para probarlo!',
                confirmText: '¡Probar ahora!',
                postImageText: 'Personaliza tu póster como nunca antes.'
            },
            zh: {
                title: '新封面编辑器！',
                paragraph: '在海报编辑器中，您现在可以使用缩放、位置调整和模糊效果来自定义专辑封面。点击“封面编辑器”试试吧！',
                confirmText: '立即试用！',
                postImageText: '像从未有过的方式定制您的海报。'
            }
        };

        const currentLang = i18n.language || 'en';
        const langData = translations[currentLang] || translations.en;

        return {
            id: 'cover-editor-feature',
            persistentId: 'cover-editor-feature-announcement',
            title: langData.title,
            paragraph: langData.paragraph,
            postImageText: langData.postImageText,
            confirmText: langData.confirmText,
            canClose: true,
            type: 'alert',
            imageURL: CoverEditorGif,
            limitDate: '2026-02-07T23:59:59.999Z'
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
        const coverEditorAlert = getCoverEditorAlert();
        
        if (!hasAlertBeenShown(coverEditorAlert.persistentId) && !modal && isAlertValid(coverEditorAlert)) {
            setModal(coverEditorAlert);
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