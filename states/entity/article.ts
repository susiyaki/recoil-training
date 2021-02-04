import {
  atomFamily,
  DefaultValue,
  selectorFamily,
  SerializableParam,
  waitForAll,
} from "recoil";

interface IArticle {
  id: number;
  title: string;
  content: string;
}

// TODO
interface IRecoilId extends Readonly<Record<string, SerializableParam>> {
  id: number;
}

// guard
const guardRecoilDefaultValue = (candidate: any): candidate is DefaultValue => {
  if (candidate instanceof DefaultValue) return true;
  return false;
};

// entity
export const articleState = selectorFamily<IArticle, IRecoilId>({
  key: "state-article",
  get: (familyKey) => ({ get }) => {
    const { title, content } = get(
      waitForAll({
        title: articleTitleState(familyKey),
        content: articleContentState(familyKey),
      })
    );

    const article: IArticle = {
      id: familyKey.id,
      title,
      content,
    };

    return article;
  },
  set: (familyKey) => ({ set, reset }, value) => {
    if (guardRecoilDefaultValue(value)) {
      reset(articleTitleState(familyKey));
      reset(articleContentState(familyKey));

      return;
    }

    set(articleTitleState(familyKey), value.title);
    set(articleContentState(familyKey), value.content);
  },
});

// valueObject
const articleTitleState = atomFamily<string, IRecoilId>({
  key: "state-title",
  default: "",
});

const articleContentState = atomFamily<string, IRecoilId>({
  key: "state-content",
  default: "",
});
