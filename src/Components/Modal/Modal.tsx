import { Fragment } from "react";
import { Transition } from "@headlessui/react";

import Button from "../Button/Button";
import Spacer from "../Spacer";

interface ModalTypes {
  modalHeader: string;
  children: any;
  modalShow: boolean;
  updateState: any;
}

const Modal = ({
  modalHeader,
  children,
  modalShow,
  updateState,
}: ModalTypes) => (
  <Transition show={modalShow} as={Fragment}>
    <div className={`fixed inset-0 z-10 overflow-y-auto`}>
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-inside-bg-darker opacity-90"></div>
          </div>
        </Transition.Child>
        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className="inline-block transform overflow-hidden rounded-lg bg-inside-bg-light text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className=" bg-inside-bg-light px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-300"
                    id="modal-headline"
                  >
                    {modalHeader}
                  </h3>
                  <Spacer />
                  <div className="mt-2">{children}</div>
                </div>
              </div>
            </div>
            <div className="bg-inside-bg-darker px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <div className="mt-3 inline-flex w-full justify-center sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                <Button isLoading={false} onClick={updateState}>
                  Anuluj
                </Button>
              </div>
            </div>
          </div>
        </Transition.Child>
      </div>
    </div>
  </Transition>
);

export default Modal;
