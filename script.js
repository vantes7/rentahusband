document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       ARCHIVO COMPLETO DE V
       ========================================= */

    const openArchive = document.getElementById("openArchive");
    const archiveModal = document.getElementById("archiveModal");
    const closeArchive = document.getElementById("closeArchive");
    const closeArchiveButton =
        document.getElementById("closeArchiveButton");


    if (openArchive && archiveModal) {

        openArchive.addEventListener("click", function () {
            archiveModal.classList.add("active");
        });

    }


    if (closeArchive) {

        closeArchive.addEventListener("click", function () {
            archiveModal.classList.remove("active");
        });

    }


    if (closeArchiveButton) {

        closeArchiveButton.addEventListener("click", function () {
            archiveModal.classList.remove("active");
        });

    }



    /* =========================================
       PROTOCOLOS DE CONFIDENCIALIDAD
       ========================================= */

    const openProtocols =
        document.getElementById("openProtocols");

    const protocolModal =
        document.getElementById("protocolModal");

    const closeProtocols =
        document.getElementById("closeProtocols");

    const closeProtocolsButton =
        document.getElementById("closeProtocolsButton");

    const consent =
        document.getElementById("consent");

    const protocolStatus =
        document.getElementById("protocolStatus");


    let protocolsRead = false;


    if (openProtocols && protocolModal) {

        openProtocols.addEventListener("click", function () {

            protocolModal.classList.add("active");

        });

    }


    function closeProtocolWindow() {

        if (protocolModal) {

            protocolModal.classList.remove("active");

        }


        protocolsRead = true;


        if (consent) {

            consent.disabled = false;

        }


        if (protocolStatus) {

            protocolStatus.textContent =
                "✓ Protocolos consultados. Ya puede aceptar las condiciones.";

            protocolStatus.classList.add("protocol-read");

        }

    }


    if (closeProtocols) {

        closeProtocols.addEventListener(
            "click",
            closeProtocolWindow
        );

    }


    if (closeProtocolsButton) {

        closeProtocolsButton.addEventListener(
            "click",
            closeProtocolWindow
        );

    }



    /* =========================================
       FORMULARIO DE ENTREVISTA
       ========================================= */

    const interviewForm =
        document.getElementById("interviewForm");


    const confirmationModal =
        document.getElementById("confirmationModal");


    const confirmationName =
        document.getElementById("confirmationName");


    const confirmationProfile =
        document.getElementById("confirmationProfile");


    const confirmationRequest =
        document.getElementById("confirmationRequest");


    const closeConfirmation =
        document.getElementById("closeConfirmation");



    if (interviewForm) {

        interviewForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /* Verificar protocolos */

                if (!protocolsRead) {

                    alert(
                        "Antes de enviar la solicitud, debe consultar los Protocolos de Confidencialidad."
                    );

                    return;

                }


                /* Obtener datos */

                const fullName =
                    document.getElementById("fullName").value;


                const selectedProfile =
                    document.getElementById("profile").value;

                const randomNumber =
                    Math.floor(1000 + Math.random() * 9000);

                const requestID =
                    "RH-2026-" + randomNumber;

                /* Mostrar nombre */

                if (confirmationName) {

                    confirmationName.textContent =
                        fullName.toUpperCase();

                }


                /* Mostrar perfil */

                if (confirmationProfile) {

                    confirmationProfile.textContent =
                        selectedProfile;

                }

                if (confirmationRequest) {

                    confirmationRequest.textContent =
                        requestID;

                }

                /* Mostrar ventana */

                if (confirmationModal) {

                    confirmationModal.classList.add("active");

                }

            }
        );

    }



    /* =========================================
       CERRAR CONFIRMACIÓN
       ========================================= */

    if (closeConfirmation) {

        closeConfirmation.addEventListener(
            "click",
            function () {

                if (confirmationModal) {

                    confirmationModal.classList.remove("active");

                }


                /* Limpiar formulario */

                if (interviewForm) {

                    interviewForm.reset();

                }


                /* Volver a bloquear consentimiento */

                protocolsRead = false;


                if (consent) {

                    consent.disabled = true;

                }


                if (protocolStatus) {

                    protocolStatus.textContent =
                        "Los protocolos deben ser consultados antes de continuar.";

                    protocolStatus.classList.remove(
                        "protocol-read"
                    );

                }

            }
        );

    }



    /* =========================================
       CERRAR MODALES CON ESC
       ========================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }


            if (
                archiveModal &&
                archiveModal.classList.contains("active")
            ) {

                archiveModal.classList.remove("active");

            }


            if (
                protocolModal &&
                protocolModal.classList.contains("active")
            ) {

                protocolModal.classList.remove("active");

            }


            if (
                confirmationModal &&
                confirmationModal.classList.contains("active")
            ) {

                confirmationModal.classList.remove("active");

            }

        }
    );


});