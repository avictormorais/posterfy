import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AlertModal from '../components/Commom/AlertModal';
import ProfilePng from '../assets/profile.png'

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
            limitDate: '2026-02-10T23:59:59.999Z'
        };
    };

    const getCommunityAlert = () => {
        const translations = {
            en: {
                title: 'The Community is live! 🎉',
                paragraph: 'You can now explore posters created by other users, like your favorites, and show off your own collection. Create a free account to save your posters and be part of the Posterfy community!',
                confirmText: 'Join the community!',
                postImageText: 'Join thousands of music fans creating stunning posters.',
                disclaimerText: 'This is an experimental version, errors may happen.'
            },
            pt: {
                title: 'A Comunidade está no ar! 🎉',
                paragraph: 'Agora você pode explorar posters criados por outros usuários, curtir seus favoritos e exibir sua própria coleção. Crie sua conta gratuita para salvar seus posters e fazer parte da comunidade Posterfy!',
                confirmText: 'Fazer parte da comunidade!',
                postImageText: 'Junte-se a milhares de fãs de música criando posters incríveis.',
                disclaimerText: 'Essa é uma versão experimental, erros podem acontecer.'
            },
            es: {
                title: '¡La Comunidad ya está aquí! 🎉',
                paragraph: 'Ahora puedes explorar pósters creados por otros usuarios, dar like a tus favoritos y mostrar tu propia colección. ¡Crea una cuenta gratuita para guardar tus pósters y ser parte de la comunidad Posterfy!',
                confirmText: '¡Unirme a la comunidad!',
                postImageText: 'Únete a miles de fans de la música creando pósters increíbles.',
                disclaimerText: 'Esta es una versión experimental, pueden ocurrir errores.'
            },
            zh: {
                title: '社区正式上线！🎉',
                paragraph: '现在您可以探索其他用户创作的海报、为您喜欢的海报点赞，并展示您自己的收藏。创建免费账号，保存您的海报，加入 Posterfy 社区！',
                confirmText: '加入社区！',
                postImageText: '加入数千名音乐爱好者，一起创作精彩海报。',
                disclaimerText: '这是一个实验版本，可能会出现错误。'
            }
        };

        const currentLang = i18n.language || 'en';
        const langData = translations[currentLang] || translations.en;

        return {
            id: 'community-feature',
            persistentId: 'community-feature-announcement',
            title: langData.title,
            paragraph: langData.paragraph,
            postImageText: langData.postImageText,
            disclaimerText: langData.disclaimerText,
            confirmText: langData.confirmText,
            canClose: true,
            type: 'alert',
            imageURL: ProfilePng,
            limitDate: '2026-03-20T23:59:59.999Z'
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

        const communityAlert = getCommunityAlert();
        if (!hasAlertBeenShown(communityAlert.persistentId) && isAlertValid(communityAlert)) {
            setModal(communityAlert);
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