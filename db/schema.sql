CREATE TABLE IF NOT EXISTS products (
  id          SERIAL PRIMARY KEY,
  name        TEXT        NOT NULL,
  description TEXT        NOT NULL DEFAULT '',
  price       INTEGER     NOT NULL CHECK (price >= 0),   -- dalam Rupiah
  stock       INTEGER     NOT NULL DEFAULT 0 CHECK (stock >= 0),
  category    TEXT        NOT NULL DEFAULT 'Umum',
  image_url   TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO products (name, description, price, stock, category) VALUES
 ('Headphone Nocturne', 'Noise cancelling, baterai 40 jam, bantalan memory foam.', 1850000, 12, 'Audio'),
 ('Jam Tangan Abyss', 'Rangka titanium, kaca safir anti gores, tahan air 100 m.', 3250000, 5, 'Fashion'),
 ('Speaker Orbit', 'Speaker bluetooth portabel dengan bass dalam dan lampu ambient.', 975000, 20, 'Audio'),
 ('Keyboard Slate 75', 'Mechanical hot-swap, gasket mount, layout 75%.', 1450000, 8, 'Gadget'),
 ('Tas Ransel Midnight', 'Anti air, kompartemen laptop 16 inci, port USB.', 780000, 0, 'Fashion'),
 ('Lampu Meja Halo', 'Dimmer sentuh, tiga suhu warna, charger nirkabel di dasar.', 520000, 15, 'Rumah');
