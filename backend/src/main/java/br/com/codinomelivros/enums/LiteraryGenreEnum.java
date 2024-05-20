package br.com.codinomelivros.enums;

public enum LiteraryGenreEnum {

    HORROR("HORROR"),
    CHILDISH("CHILDISH"),
    THRILLER ("THRILLER"),
    FANTASY("FANTASY"),
    ADVENTURE("ADVENTURE"),
    DYSTOPIA("DYSTOPIA"),
    REAL_CRIME("REAL_CRIME"),
    ROMANCE("ROMANCE"),
    COMIC("COMIC"),
    NONE("NONE");

    private String name;

    LiteraryGenreEnum(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
